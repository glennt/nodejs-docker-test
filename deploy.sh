DEPLOYMENT_NAME=$1

./deleteDeployment.sh $DEPLOYMENT_NAME

kubectl create -f $DEPLOYMENT_NAME.yaml
kubectl expose deployment $DEPLOYMENT_NAME --type=NodePort
minikube service $DEPLOYMENT_NAME --url