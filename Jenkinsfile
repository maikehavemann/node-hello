pipeline {
  agent none

  stages {
    stage('Build') {
      agent{
        node {
          label 'build'
        }
      }
      steps {
          git 'http://129.40.23.72:3006/maike/hello-node.git'
          sh 'npm install -g npm@latest'
          sh 'npm install'
          sh 'npm test'
      }
    }
    
    stage('Deploy') {
      agent{
        node {
          label 'test'
        }
      }
      steps{
        ansiblePlaybook(inventory: 'hosts.ini', playbook: 'playbook_dev.yaml')
        ansiblePlaybook(inventory: 'hosts.ini', playbook: 'integration_test.yaml')
        ansiblePlaybook(inventory: 'hosts.ini', playbook: 'playbook_test.yaml')
      }
    }
  }
}
