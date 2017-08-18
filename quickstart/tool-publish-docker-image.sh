#!/bin/bash
./tool-rm-gen-and-package.sh
cp target/celerio-angular-quickstart.jar docker/.
cp target/db/angulardb.mv.db docker/.
cd docker
docker build -t celerio-angular-quickstart .
docker tag celerio-angular-quickstart nromanetti/celerio-angular-quickstart
docker push nromanetti/celerio-angular-quickstart

