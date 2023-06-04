# Create new Entry point
1. entry point GET /Product
2. the entry point will recieve product name /product?name=<PRODUCT_NAME>
3. the entry point will return the following message "Your product name is: <PRODUCT_NAME> "



# Write new API
## PORT 4000
### Entrypoints
1. GET /cars - find some api that return cars and copy paste the contnet into the code
2. GET /log?text="<SOME_TEXT>" print the text into a file (log.txt) use `append`
3. create middleware `app.use` that will validate SOME_TEXT to max 20 characters 