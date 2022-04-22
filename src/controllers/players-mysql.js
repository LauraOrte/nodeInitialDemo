import { Player, Roll } from '../models/player-mysql';
import { rollDices } from '../models/dices';
import sequelize from '../database/config-sequelize';

export const createPlayer = async (req, res) => {
    try {
        let { name } = req.body;
        name ? true : NAME = 'ANONYMOUS';
        const playerStored = await Player.create({ name });
        res.status(200).json({
            player: playerStored
        });
    } catch (error) {
        res.status(500).json({ error })
    }
};

export const playersGet = async (req, res) => {
    try {
        const players = await Player.findAll({
            attributes: ['id', 'name', 'winRate'],
        });
        res.status(200).json({
            players
        });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const playerGetId = async (req, res) => {

};

export const generalRanking = async (req, res) => {
    try {
        const totalPlayers = await Player.count();
        const sumWinRate = await Player.sum('winRate');
        const generalWinRate = sumWinRate / totalPlayers;
        res.status(200).json({ generalWinRate });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const modifyPlayerName = async (req, res) => {
    try {
        const id = req.params.id;
        const { name } = req.body;
        await Player.update({ name }, { where: { id: id } });
        res.status(200).json({
            player
        });
    } catch (error) {
        res.status(400).json({
            error: 'Player not found'
        });
    };
};

export const playerRollDices = async (req, res) => {
    const playerId = req.params.id;

    const { diceA, diceB, rollScore, veredict } = rollDices();

    try {
        const roll = await Roll.create({ diceA, diceB, rollScore, veredict, playerId });

        let arr = [];

        if (veredict === 'win') {
            Player.increment(['totalGames', 'totalWins'], { where: { id: playerId } });
        }

        if (veredict === 'lose') {
            Player.increment(['totalGames'], { where: { id: playerId } });
        }

        const player = await Player.findAll({ attributes: ['totalGames', 'totalWins'], where: { id: playerId } });

        arr.push(player);

        const { totalGames, totalWins } = arr[0][0].dataValues;

        const winRate = (totalWins / totalGames) * 100
        await Player.update({ winRate }, { where: { id: playerId } });

        const playerRolled = await Player.findAll({ attributes: ['name'], where: { id: playerId } });

        res.status(200).json({
            playerRolled,
            roll
        });

    } catch (error) {
        res.status(500).json(error);
    }
};

export const getBetterPlayer = async (req, res) => {
    const betterWinRate = await Player.max('winRate')
    console.log(betterWinRate)
    try {
        const player = await Player.findAll({ where: { winRate: betterWinRate } })
        res.status(200).json({ player });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const getWorstPlayer = async (req, res) => {
    const worstWinRate = await Player.min('winRate')
    console.log(worstWinRate)
    try {
        const player = await Player.findAll({ where: { winRate: worstWinRate } })
        res.status(200).json({ player })
    } catch (error) {
        res.status(500).json({ error })
    }
};

export const deleteGames = async (req, res) => {
    const id = req.params.id;

    try {
        await Roll.destroy({ where: { PlayerId: id } });

        await Player.update({
            totalGames: 0,
            totalWins: 0,
            winRate: 0
        }, { where: { id: id } });

        const player = await Player.findAll({ where: { id: id } });

        res.status(200).json({
            player
        });

    } catch (error) {
        res.status(500).json({ error })
    }
};