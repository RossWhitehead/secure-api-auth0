# Node API secured with Auth0

## Testing with a cli
![Client credentials flow](https://cdn2.auth0.com/docs/media/articles/flows/concepts/auth-sequence-client-credentials.png)

Call the OAuth token endpoint, passing client_id and client_secret. If client credentials are valid the endpoint will respond with a bearer token.

```
curl --request POST \
  --url https://****.eu.auth0.com/oauth/token \
  --header 'content-type: application/json' \
  --data '{"client_id":"tkyNeHXIn1hvk0N3MeM1SKD6pKCT5QTm","client_secret":"zhuyz1SoM5w5GbnW2P_szZSQioMFHFAM-ufjOYExo1ypm-4ptLJVy40G1SSwxB3y","audience":"https://localhost:3000","grant_type":"client_credentials"}'
```  

Call the API, passing the bearer token in the authorization header.
```
curl --request GET \
  --url http://localhost:3000/public \
  --header 'authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik9EbEZNVFJEUWpNeU56ZEdSak00TTBVMFF6SkJNamxGTXpBMlJERTBNakkwUVRrM05rUTJRdyJ9.eyJpc3MiOiJodHRwczovL3Nzb3IuZXUuYXV0aDAuY29tLyIsInN1YiI6InRreU5lSFhJbjFodmswTjNNZU0xU0tENnBLQ1Q1UVRtQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDozMDAwIiwiaWF0IjoxNTg4NDMzNTY1LCJleHAiOjE1ODg1MTk5NjUsImF6cCI6InRreU5lSFhJbjFodmswTjNNZU0xU0tENnBLQ1Q1UVRtIiwic2NvcGUiOiJyZWFkOmFsbCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.LQXGrRqAjD8cs_X71cSYXp0hKgU6ylZWs17nHZ1kTkX-6h7h_i7ECfz5-pDisuQEmOsasGVXfRr8YlAh3aueOCs6n7bVthqUvQpOq_wFHIyKZq5afPt47aYdaypbBYlORX_5cepz44VwZ6YzZn0tpX2yY7c7vPhIOlHLCAHYy54jWNqSqXeM-dHxrrRqrfVA8c3PkztnnewZ_L_MP7km6CB-aOTsnlQJ1f153BZMdVaN559yAF49Xlj2vOQz1jx5eFJGhRxGYv0wpUlL_yfJvwq0kca5ogzXTxSnQdCwS17Dsu0Z4MRtZBsM5WZnIh5eZSOTYFf64VhiKR_ojXAxEw'
  ```
