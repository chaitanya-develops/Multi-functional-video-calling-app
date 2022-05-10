pipeline{
    environment{
            image_frontend = ''
            image_backend = ''
            
    }
    agent any
    stages{
        stage('Stage 1: Git Clone'){
            steps{
                git branch: 'deployment', url: 'https://github.com/chaitanya-develops/Multi-functional-video-calling-app.git'
            }
        }
       
       
        stage('Stage 2: Ansible Deployment to hosts'){
            steps{
                
                ansiblePlaybook becomeUser: 'null', colorized: true, installation: 'Ansible', inventory: 'deploy-docker/inventory', playbook: 'deploy-docker/deploy-app.yml', sudoUser: 'null'
            
            }          
        }   
    }
}
