#!/usr/bin/env node

// colours the output text
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
// used to collect user input
import inquirer from 'inquirer';
import gradient from 'gradient-string';

import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

// used in JS doesn't have a timeout function
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));