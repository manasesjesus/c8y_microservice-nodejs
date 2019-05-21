# Cumulocity Microservice

Cumulocity microservice developed using Node.js and Docker. It notifies a Slack channel when there are new alarms in a specified tenant.

### Prerequisites

- Local Docker installation
- An account on [cumulocity.com](https://cumulocity.com). Create a free trial to test this example.

### Build

Execute the following commands to build the Docker image and save it as *image.tar*:

```shell
$ docker build -t mynode-microservice .
$ docker save mynode-microservice > "image.tar"
```

Then pack *image.tar* together with the manifest *cumulocity.json* into a ZIP file.

```shell
$ zip mynode-microservice cumulocity.json image.tar
```

The resulting *mynode-microservice.zip* file contains the microservice and it is ready to be uploaded to the Cumulocity platform.

### Deployment

Deploy the microservice application (refer to [Adding own applications](https://cumulocity.com/guides/users-guide/administration/#a-name-adding-applications-a-adding-own-applications) in the Cumulocity's User guide) and subscribe it afterwards. It may take some minutes for the ZIP file to be uploaded. 

### Execution

Use a web browser or a terminal command (e.g. cURL) to make a GET request to the microservice endpoints providing your user credentials.

```http
GET <tenant>.cumulocity.com/service/python-microservice/environment
```
