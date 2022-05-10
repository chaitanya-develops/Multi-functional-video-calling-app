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
        
        stage('Stage 2: Build Docker image for backend'){
            steps{
                dir("backend"){
                    script{
                        image_backend= docker.build "chaitanyadevelops/videocall_server:latest"
                    }
                }
            }
        }
        stage('Stage 3: Build Docker Client'){
            steps{
                dir("frontend"){
                    script{
                        image_frontend= docker.build "chaitanyadevelops/videocall_client:latest"
                    }
                }
            }
        }  
        
        stage('Stage 4: Docker Hub Push server image') {
            steps {
                script {
                    docker.withRegistry('', 'docker-jenkins') {
                        image_backend.push()
                    }
                }
            }
        }
        stage('Stage 5: Docker Hub Push client image') {
            steps {
                script {
                    docker.withRegistry('', 'docker-jenkins') {
                        image_frontend.push()
                    }
                }
            }
        }
        stage('Stage 6: Ansible Deployment to hosts'){
            steps{
                
                ansiblePlaybook becomeUser: 'null', colorized: true, installation: 'Ansible', inventory: 'deploy-docker/inventory', playbook: 'deploy-docker/deploy-app.yml', sudoUser: 'null'
            
            }          
        }   
    }
}