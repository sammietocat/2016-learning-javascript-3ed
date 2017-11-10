#!/bin/bash
# this bash script serves to makes a nodejs container for touring across 'learning javascript'
# note: ensures the image nodejs:lj is already built

docker run -it -v ${PWD}:/root/Workspaces nodejs:lj bash
