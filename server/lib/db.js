/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

'use strict';

/**
 * Loads up the database. Exports https://github.com/rum-diary/rum-diary-db-mongo
 *
 * @Class DB
 */
var config = require('./config');

var dbConfig = {
  get: function (name) {
    return config.get('mongo.' + name);
  }
};

var MongoAdapter = require('rum-diary-db-mongo');

var db = Object.create(MongoAdapter);
db.init(dbConfig);

module.exports = db;
