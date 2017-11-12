#!/bin/bash
# this bash script serves to makes a nodejs container for touring across 'learning javascript'
# note: ensures the image node:lj is already built

docker run -it -v ${PWD}:/root/Workspaces node:lj bash
