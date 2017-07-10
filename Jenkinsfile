pipeline
{
    parameters
    {
        string(name: 'BRANCH', defaultValue: 'master', description: 'Choose git branch to build from')
    }
    options
    {
        buildDiscarder(logRotator(numToKeepStr: '30', daysToKeepStr: '60'))
    }
    agent
    {
        docker
        {
            image 'node'
        }
    }
    stages
    {
        stage('SCM: code update')
        {
            steps
            {
                script
                {
                     currentBuild.displayName = "#${BUILD_ID}-${BRANCH}"
                }
                checkout([
                    $class: 'GitSCM', branches: [[name: '${BRANCH}']],
                    userRemoteConfigs: [[url: 'git@github.com:tikalk/RM_ResourcePlayer.git',credentialsId:'ubuntu']]
                ])
            }
        }
        stage('NPM install')
        {
            steps
            {
                sh("npm install")
            }
        }
        stage('NPM build')
        {
            steps
            {
                sh("npm build")
            }
        }
    }
}
