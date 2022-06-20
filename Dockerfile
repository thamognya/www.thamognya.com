ARG BASE_IMAGE=ubuntu:latest
FROM $BASE_IMAGE

RUN mkdir /website
RUN apt-get update && apt-get install -y \
    git \
    wget \
    curl \
  && curl https://sh.rustup.rs -sSf | sh -s -- -y \
  && 

ENTRYPOINT ["/i686-elf-tools/i686-elf-tools.sh"]
