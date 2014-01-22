#! /usr/bin/env sh

#./sbt "start -DapplyEvolutions.default=true"

if [ -f conf/application.conf -o -f conf/reference.conf ] || [ -d project ]; then
  if test "$1" = "clean-all"; then
    rm -rf target
    rm -rf tmp
    rm -rf logs
    rm -rf dist
    rm -rf project/project
    rm -rf project/target
    if [ $# -ne 1 ]
    then
     shift
    else
      echo "[info] Done!"
      exit 0
    fi
  fi

  if test "$1" = "stop"; then
    if [ -f RUNNING_PID ]; then
      echo "[info] Stopping application (with PID `cat RUNNING_PID`)..."
      kill `cat RUNNING_PID`

      RESULT=$?

      if test "$RESULT" = 0; then
        echo "[info] Done!"
        exit 0
      else
        echo "[\033[31merror\033[0m] Failed ($RESULT)"
        exit $RESULT
      fi
    else
      echo "[\033[31merror\033[0m] No RUNNING_PID file. Is this application running?"
      exit 0
    fi
  fi

  if test "$1" = "debug"; then
     JPDA_PORT="9999"
     shift
  fi

  if [ -n "$1" ]; then
     JPDA_PORT="${JPDA_PORT}"
  fi

  if [ -z "${JPDA_PORT}" ]; then
    DEBUG_PARAM=""
  else
    DEBUG_PARAM="-Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=${JPDA_PORT}"
  fi

  java ${DEBUG_PARAM} -Xms512M -Xmx1536M -Xss1M -XX:+CMSClassUnloadingEnabled -XX:MaxPermSize=512M ${JAVA_OPTS} -Dfile.encoding=UTF-8 -jar `dirname $0`/sbt-launch.jar "$@"

else
  echo "Please check conf/application.conf or project directory!"
fi


