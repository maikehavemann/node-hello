pipeline {
    environment {
        registry = "maikehavemann/hello-node"
        registryCredential = 'dockerhub'
    }

  agent{
    node {
      label 'build'
    }
  }

  stages {
    stage('Clone code') {
        steps {
            git 'http://129.40.23.72:3006/maike/hello-node.git'
        }
    }
    stage('Build App') {
       steps {
         sh 'npm install -g npm@latest'
         sh 'npm install'
       }
    }
    stage('Unit Test') {
       steps {
         sh 'npm test'
       }
    }
    stage('Deploy for test') {
      steps{
        // sh "ansible docker_zcx -m ping -i hosts.ini"
        ansiblePlaybook(inventory: 'hosts.ini', playbook: 'playbook_dev.yaml')
      }
    }
    stage('Integration test') {
      steps{
        // sh "ansible docker_zcx -m ping -i hosts.ini"
        ansiblePlaybook(inventory: 'hosts.ini', playbook: 'integration_test.yaml')
      }
    }
    stage('Deploy for acceptance test') {
      steps{
        // sh "ansible docker_zcx -m ping -i hosts.ini"
        ansiblePlaybook(inventory: 'hosts.ini', playbook: 'playbook_test.yaml')
      }
    }
  }
}
