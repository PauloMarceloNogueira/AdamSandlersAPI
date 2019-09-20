# REST API Adam Sandler's API

<p align='center'>
  <img src="https://cdn.ceoworld.biz/wp-content/uploads/2014/12/Adam-Sandler.jpg" style="width:500px; height:auto;">
</p>
## Install

    npm install

## Run the app

    npm start

# REST API

The REST API to the example app is described below.

## Get list of Things

### Request

#### IMAGES

`GET /images?quality`  
`GET /images?characters`  
`GET /images?ages`
`GET /images?companion` (TODO)

#### INFOS

`GET /info/movies` (TODO)  
`GET /info/characters` (TODO)

#### Examples

`GET localhost:4300/images?quality=moustache`

- Returns Adam Sandler Images of Mustache

`GET localhost:4300/images?characters=Sonny Koufax`

- Returns Sonny Koufax (Adam Sandler charactes in 'Big Daddy') images

`GET localhost:4300/images?ages=1980`

- Returns Adam Sandler Images of 80's
