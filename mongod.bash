#!/bin/bash

DATA_DIR="../data"
mkdir -p $DATA_DIR
mongod --dbpath $DATA_DIR
