pipeline
{
    options
    {
        buildDiscarder(logRotator(numToKeepStr: '30', daysToKeepStr: '60'))
    }
    agent
    {
        agent
        {
            docker 'node'
        }
    }
    stages
    {
        stage('Build')
        {
            steps
            {
                wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm'])
                {
                    echo("test")
                }
            }
        }
    }
    post
    {
        success
        {
            notifyBuild('SUCCESS')
        }

        failure
        {
            notifyBuild('FAILURE')
        }

        unstable
        {
            notifyBuild('UNSTABLE')
        }
    }
}

def notifyBuild(String buildStatus = 'STARTED')
{
  // build status of null means successful
  buildStatus =  buildStatus ?: 'SUCCESS'

  // Default values
  def colorName = 'RED'
  def colorCode = '#FF0000'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"
  def notify = false

  // Override default values based on build status
  if (buildStatus == 'STARTED')
  {
    color = 'YELLOW'
    colorCode = '#FFFF00'
  }
  else if (buildStatus == 'SUCCESS')
  {
    color = 'GREEN'
    colorCode = '#00CF00'
    notify = true
  }
  else
  {
    color = 'RED'
    colorCode = '#FF0000'
    notify = true
  }

  // Send notifications
  if (notify == true)
  {
    slackSend (color: colorCode, message: summary, channel: "#fuze2017" )
  }
}