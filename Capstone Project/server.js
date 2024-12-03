"use strict";
const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.static("public"));
const PORT = 8000;

const connection = mysql.createConnection({
	host : 'localhost',
	user : 'pace',
	password : '123456',
	database : 'Spotify'
});

// 1. GET endpoint to fetch data from the database
app.get('/employee', function (req, res) {
  // You can filter the query based on query parameters
  const employeeId = req.query.id;
  let query = 'SELECT * FROM employees'; // Replace 'employees' with your table name

  if (employeeId) {
    query += ' WHERE employeeid = ?';
  }

  connection.query(query, [employeeId], function (error, results) {
    if (error) {
      res.status(500).send('Internal Error');
    } else {
      if (results.length === 0) {
        res.status(404).send('No employee found');
      } else {
        res.status(200).json(results); // Send the result as a JSON response
      }
    }
  });
});
// 2. POST endpoint to create a new employee (or PUT to update)
app.post('/employee', function (req, res) {
  const { employeeid, firstname, lastname, position } = req.body;
  
  if (!employeeid || !firstname || !lastname || !position) {
    return res.status(400).send('Missing required fields');
  }

  const query = 'INSERT INTO employees (employeeid, firstname, lastname, position) VALUES (?, ?, ?, ?)';
  connection.query(query, [employeeid, firstname, lastname, position], function (error, results) {
    if (error) {
      res.status(500).send('Internal Error');
    } else {
      res.status(201).send('Employee created');
    }
  });
});

// 3. PUT endpoint to update an existing employee
app.put('/employee/:id', function (req, res) {
  const employeeId = req.params.id;
  const { firstname, lastname, position } = req.body;

  if (!firstname || !lastname || !position) {
    return res.status(400).send('Missing required fields');
  }

  const query = 'UPDATE employees SET firstname = ?, lastname = ?, position = ? WHERE employeeid = ?';
  connection.query(query, [firstname, lastname, position, employeeId], function (error, results) {
    if (error) {
      res.status(500).send('Internal Error');
    } else {
      if (results.affectedRows === 0) {
        res.status(404).send('Employee not found');
      } else {
        res.status(200).send('Employee updated');
      }
    }
  });
});

// 4. DELETE endpoint to delete an employee by employeeid
app.delete('/employee/:id', function (req, res) {
  const employeeId = req.params.id;

  const query = 'DELETE FROM employees WHERE employeeid = ?';
  connection.query(query, [employeeId], function (error, results) {
    if (error) {
      res.status(500).send('Internal Error');
    } else {
      if (results.affectedRows === 0) {
        res.status(404).send('Employee not found');
      } else {
        res.status(200).send('Employee deleted');
      }
    }
  });
});

app.listen(PORT);
app.get('/hello', function (req, res) {
res.set("Content-Type", "text/plain");
res.send('Hello World!');
});
app.get('/echo', function (req, res) {
	const value = req.query['input'];
	res.set("Content-Type", "text/plain");
	res.send(value);
});
