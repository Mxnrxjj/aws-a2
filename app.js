'use strict';

const express = require('express');
const { add, subtract, multiply, divide } = require('./calculator');

const app = express();

const OPERATIONS = { add, subtract, multiply, divide };

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: '2.1.0' });
});

app.get('/calc/:operation', (req, res) => {
  const { operation } = req.params;
  const fn = OPERATIONS[operation];

  if (!fn) {
    return res.status(400).json({ error: `unknown operation: ${operation}` });
  }

  const a = Number(req.query.a ?? 0);
  const b = Number(req.query.b ?? 0);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'a and b must be numbers' });
  }

  try {
    return res.json({ operation, result: fn(a, b) });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

module.exports = app;