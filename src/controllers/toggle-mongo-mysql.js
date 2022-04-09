import { createPlayerMongo, playersGetMongo, playerGetIdMongo, generalRankingMongo, modifyPlayerNameMongo, playerRollDicesMongo, getBetterPlayerMongo, getWorstPlayerMongo, deleteGamesMongo } from './players-mongo';

export const createPlayer = () => {
    if (process.env.DB === 'mongodb') {
        createPlayerMongo();
    } else if (process.env.DB === 'mysql') {

    };
};

export const playersGet = () => {
    if (process.env.DB === 'mongodb') {
        playersGetMongo();
    } else if (process.env.DB === 'mysql') {

    };
};

export const playerGetId = () => {
    if (process.env.DB === 'mongodb') {
        playerGetIdMongo();
    } else if (process.env.DB === 'mysql') {

    };
};

export const generalRanking = () => {
    if (process.env.DB === 'mongodb') {
        generalRankingMongo();
    } else if (process.env.DB === 'mysql') {

    };
};

export const modifyPlayerName = () => {
    if (process.env.DB === 'mongodb') {
        modifyPlayerNameMongo();
    } else if (process.env.DB === 'mysql') {

    };
};

export const playerRollDices = () => {
    if (process.env.DB === 'mongodb') {
        playerRollDicesMongo();
    } else if (process.env.DB === 'mysql') {

    };
};

export const getBetterPlayer = () => {
    if (process.env.DB === 'mongodb') {
        getBetterPlayerMongo()
    } else if (process.env.DB === 'mysql') {

    };
};

export const getWorstPlayer = () => {
    if (process.env.DB === 'mongodb') {
        getWorstPlayerMongo();
    } else if (process.env.DB === 'mysql') {

    };
};

export const deleteGames = () => {
    if (process.env.DB === 'mongodb') {
        deleteGamesMongo();
    } else if (process.env.DB === 'mysql') {

    };
};