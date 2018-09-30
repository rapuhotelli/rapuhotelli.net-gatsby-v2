#!/usr/bin/env bash
rm -rf .cache/
rm -rf public/
gatsby build
tar -zcf blog.tgz public
scp blog.tgz rapuhotelli:blog.tgz
ssh -t rapuhotelli "rm -rf /var/www/rapuhotelli.net/public && \
tar -zxf blog.tgz -C /var/www/rapuhotelli.net && \
rm -f blog.tgz"
rm blog.tgz
