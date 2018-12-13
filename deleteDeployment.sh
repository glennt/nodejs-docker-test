DEPLOYMENT_NAME=$1

kubectl delete service $DEPLOYMENT_NAME
kubectl delete deployment $DEPLOYMENT_NAME