# Belahdia's Estate

This is a small side-project written in Typescript with Angular and Go with Gin.

Belahdia's Estate is a group that creates housing interiors in the game Final Fantasy XIV. This website serves as its presentation page, as well as a way to contact them.

This project is a small personal example project for Angular and Gin.

## Components (`be-components`)

A small project that contains shared components. They can be reused in other projects and could be published as an independant library, with some tweaks.

## Front-end (`be-front`)

This is the front-end project, built with Angular 17. It contains two pages: a homepage and a contact page.

## Back-end (`be-back`)

The back-end project, build with the Gin library, in Go. It only has one route, a gateway to a Discord webhook URL, used to send contact requests. It is heavily rate-limited (1 req/hour) in order to avoid spam.

## Terraform (`be-terraform`)

A small Terraform project to publish the whole project in GCP.
