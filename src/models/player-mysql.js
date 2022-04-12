import { DataTypes } from 'sequelize';
import sequelize from '../database/config-sequelize';

export const Roll = sequelize.define('Roll', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    diceA: {
        type: DataTypes.INTEGER
    },
    diceB: {
        type: DataTypes.INTEGER
    },
    rollScore: {
        type: DataTypes.INTEGER
    },
    veredict: {
        type: DataTypes.STRING
    }
},
    {
        timestamps: false,
        updatedAt: false,
        createdAt: false,
        tableName: 'rolls'
    }
);

export const Player = sequelize.define('Player', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    totalGames: {
        type: DataTypes.STRING,
        defaultValue: 0
    },
    totalWins: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    winRate: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValues: 0
    }
},
    {
        timestamps: true,
        updatedAt: false,
        createdAt: 'data',
        tableName: 'players'
    }
);

Player.hasMany(Roll, {onDelete:'cascade'});
Roll.belongsTo(Player);