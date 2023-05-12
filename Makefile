gen:
	#npx openapi-generator-cli generate -i http://127.0.0.1:8000/api/openapi.json -g typescript-fetch -o ./src/api
	npx @rtk-query/codegen-openapi openapi-config.json

build:
	npm run build
	cp src/index.html dist/index.html

run:
	npm start