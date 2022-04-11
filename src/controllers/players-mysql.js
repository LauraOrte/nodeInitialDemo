import sequelize, { where } from 'sequelize';
import { Player, Roll } from '../models/player-mysql';
import rollDices from '../models/dices';
import crypto from 'crypto';

export const createNewPlayer = async (req, res) => {
    try {
        let { name } = req.body;
        name ? true : NAME === 'ANONYMOUS';
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
            include: [roll]
        });
        res.status(200).json({
            players
        });
    } catch (error) {
        res.status(500).json({ error });
    }
};

export const playerGetId = async () => {

};

export const generalRanking = async () => {

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

export const playerRollDices = async () => {
    const playerId = req.params.id;
    const { diceA, diceB, rollScore, veredict } = rollDices()

    let win = '';

    try {
        const roll = await roll.create({
            diceA,
            diceB,
            rollScore,
            veredict,
            playerId
        });

        let arr = '';

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
        await Player.update({ winRate }, { where: { id: PlayerId } });

        const playerRolled = await Player.findAll({ attributes: ['name'], where: { id: PlayerId } });

        res.status(200).json({
            playerRolled,
            roll
        }); 

    } catch (error) {
        res.status(500).json(error);
    }
};

export const getBetterPlayer = async () => {

};

export const getWorstPlayer = async () => {

};

export const deleteGames = async () => {

};