pipeline {
  agent {
    docker {
      image 'cypress/base:12. cypress/browsers:chrome67  '
    }

  }
  stages {
    stage('build') {
      steps {
        sh '''npm ci
npm run test'''
      }
    }

  }
  environment {
    HOME = ''
    CHROME_BIN = '\'/usr/bin/google-chrome\''
  }
}