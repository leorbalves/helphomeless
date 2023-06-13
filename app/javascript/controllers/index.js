// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import CarouselController from "./carousel_controller"
application.register("carousel", CarouselController)

import CommentsController from "./comments_controller"
application.register("comments", CommentsController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import MapController from "./map_controller"
application.register("map", MapController)

import RefreshController from "./refresh_controller"
application.register("refresh", RefreshController)
