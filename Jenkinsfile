import groovy.json.*

def sh_out(cmd){
   sh(script: cmd, returnStdout:true).trim()
}

node ('master') {
  def registry = "https://329054710135.dkr.ecr.eu-west-2.amazonaws.com"
  withCredentials([[$class: 'AmazonWebServicesCredentialsBinding', accessKeyVariable: 'AWS_ACCESS_KEY_ID', credentialsId: 'k8s-aws-ecr', secretKeyVariable: 'AWS_SECRET_ACCESS_KEY']]) {
    withEnv(['AWS_ECR_LOGIN=true', 'AWS_ECR_LOGIN_REGISTRY_IDS=329054710135', 'AWS_DEFAULT_REGION=eu-west-2', 'AWS_REGION=eu-west-2']) {
      stage ('Prepare') {
        deleteDir()
      }
      stage('Build & Push Image') {
        node ('linux-host-slave') {
          sh "docker images"
          sh "docker rmi 79ab26611022"
          sh "df -h"
          withEnv(['AWS_ECR_LOGIN=true', 'AWS_ECR_LOGIN_REGISTRY_IDS=329054710135', 'AWS_DEFAULT_REGION=eu-west-2', 'AWS_REGION=eu-west-2']) {
            sh(script: "\$(\${HOME}/.local/bin/aws ecr get-login --no-include-email &> /dev/null)", returnStdout:false)
            sh "cp \${HOME}/.docker/config.json \${HOME}/.dockercfg"
            withDockerRegistry([credentialsId: 'ecr:eu-west-2:k8s-aws-ecr', url: "${registry}"]) {
              git 'https://github.com/tikalk/RM_ResourcePlayer.git'
              def image = docker.build("329054710135.dkr.ecr.eu-west-2.amazonaws.com/k8s-fuze/rm_resource_player:${BUILD_NUMBER}")
              image.push()
            }
          }
        }
      }
    }
  }
}