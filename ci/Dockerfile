FROM node:16.14-bullseye

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - \
	&& apt-get install -y --no-install-recommends \
	patch \
	chromium \
	bc \
	sudo \
	git \
	gosu \
	nano \
	less \
	xvfb \
	libgtk-3-0 \
	libgconf-2-4 \
	bzip2 \
    parallel \
    coreutils \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    wget \
    unzip \
    zip \
    xauth \
	&& rm -rf /var/lib/apt/lists/* \
	&& apt-get clean

# xauth for xvfb to run
# https://github.com/cypress-io/xvfb/issues/98#issuecomment-557170579

ENV GIT_EDITOR=nano

# Set environment variable for JavaScript tests.
ENV CHROME_BIN=/usr/bin/chromium

# Set environment variable for terminal
ENV TERM=xterm

# Add ${GOPATH}/bin into ${PATH}
ENV PATH=${GOPATH}/bin:${PATH}

# Suppress angular analytics dialog
ENV NG_CLI_ANALYTICS=false

RUN echo "net.ipv4.tcp_timestamps=1" >> /etc/sysctl.conf && \
    echo "net.ipv4.tcp_tw_recycle=1" >> /etc/sysctl.conf && \
    echo "net.ipv4.tcp_tw_reuse=1" >> /etc/sysctl.conf && \
    echo "fs.inotify.max_user_watches=524288" >> /etc/sysctl.conf

RUN echo "* soft nofile 65536" >> /etc/security/limits.conf && \
    echo "* hard nofile 65536" >> /etc/security/limits.conf

RUN npm install -g @angular/cli@latest