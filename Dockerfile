FROM node:lts as dependencies

RUN apt-get update && apt-get install vim -y
RUN apt-get install sqlite -y
RUN npm install -g @nestjs/cli

EXPOSE 7888

CMD ["/bin/bash"]

ENTRYPOINT ["docker-entrypoint.sh"]

