FROM node:9.1.0
MAINTAINER  sammietocat
VOLUME ["/root/Workspaces"]
RUN npm install -g eslint
#CMD echo "hello javascript" && tail -f /dev/null
