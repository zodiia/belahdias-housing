package main

import (
	"time"

	ratelimit "github.com/JGLTechnologies/gin-rate-limit"
	"github.com/gin-gonic/gin"
)

type contactRequest struct {
	DiscordId        string `json:"discordId"`
	CharacterName    string `json:"characterName"`
	Server           string `json:"server"`
	District         string `json:"district"`
	HouseSize        string `json:"houseSize"`
	FurnituresBudget string `json:"furnituresBudget"`
	Message          string `json:"message"`
}

func main() {
	rateLimitStore := ratelimit.InMemoryStore(&ratelimit.InMemoryOptions{
		Rate:  time.Hour,
		Limit: 1,
	})
	rateLimitMiddleware := ratelimit.RateLimiter(rateLimitStore, &ratelimit.Options{
		ErrorHandler: rateLimitHandler,
		KeyFunc:      ipRateLimit,
	})
	router := gin.Default()
	router.POST("/contact", rateLimitMiddleware, postContactRequest)
	router.Run("localhost:8080")
}

func ipRateLimit(context *gin.Context) string {
	return context.ClientIP()
}

func rateLimitHandler(context *gin.Context, info ratelimit.Info) {
	context.String(429, "Too many requests.")
}

func postContactRequest(context *gin.Context) {
	var contact = &contactRequest{}
	if err := context.BindJSON(contact); err != nil {
		context.String(400, "Malformed request.")
		return
	}
	if err := sendDiscordEmbed(contact); err != nil {
		context.String(502, "Bad gateway.")
	}
	context.String(200, "OK")
}
