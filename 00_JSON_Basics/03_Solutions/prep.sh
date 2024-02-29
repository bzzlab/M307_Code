#!/bin/bash
#
LIB='../../bin/prep-lib.sh'
if [ ! -f $LIB ]; then      #??
  echo $LIB does not exist! #??
  exit 2                    #??
fi                          #??
source $LIB
#----------------------------------------
if test $# -lt 1; then
  printf "%s\n" \
    "Error: Provide at least 1 argument:" \
    "Prep number n" \
    "Exit script."
  exit 1
fi

DEST="../02_Exercises"
SRC="."
# declare -a server=($(ls 0*_server.js))

case $1 in
0)
  createTargetDir "${DEST}"
  for dir in 'a01'; do
    createTargetDir "${DEST}/${dir}"
    createTargetDir "${DEST}/${dir}/scripts"
    createTargetDir "${DEST}/${dir}/data"
    cp ${SRC}/${dir}/data/lernender.json ${DEST}/${dir}/data/lernender.json
  done
  ;;
1)
  DEST="../02_Exercises/a01"
  SRC="a01";dir=scripts;file="showData.js"
  removeSolution ${SRC}/${dir}/${file} "${DEST}/${dir}/${file}"
  file="fetchData.js"
  removeSolution ${SRC}/${dir}/${file} "${DEST}/${dir}/${file}"
  SRC=a01;file="index.html"
  removeSolution ${SRC}/${file} "${DEST}/${file}"
  ;;
*)
  echo "Incorrect choice entered!"
  ;;
esac
