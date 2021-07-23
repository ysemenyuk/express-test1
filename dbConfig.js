import Knex from 'knex';
import knexConfig from './knexfile.js';
import pkg from 'objection';
const { Model } = pkg;

const knex = Knex(knexConfig.development);
Model.knex(knex);

export default knex;
