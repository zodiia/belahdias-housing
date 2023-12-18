package main

import (
	"encoding/json"
	"os"
	"time"

	"github.com/monaco-io/request"
)

type discordEmbedField struct {
	Name   string `json:"name"`
	Value  string `json:"value"`
	Inline bool   `json:"inline"`
}

type discordEmbed struct {
	Title       string              `json:"title"`
	Description string              `json:"description"`
	Timestamp   string              `json:"timestamp"`
	Color       int                 `json:"color"`
	Fields      []discordEmbedField `json:"fields"`
}

type discordWebhookRequest struct {
	Embeds []discordEmbed `json:"embeds"`
}

func makeDiscordEmbedField(name string, value string) discordEmbedField {
	return discordEmbedField{
		Name:   name,
		Value:  value,
		Inline: true,
	}
}

func makeDiscordEmbedFields(contact *contactRequest) []discordEmbedField {
	return []discordEmbedField{
		makeDiscordEmbedField("Discord username", contact.DiscordId),
		makeDiscordEmbedField("Character name", contact.CharacterName),
		makeDiscordEmbedField("Server", contact.Server),
		makeDiscordEmbedField("District", contact.District),
		makeDiscordEmbedField("House size", contact.HouseSize),
		makeDiscordEmbedField("Furnitures budget", contact.FurnituresBudget),
	}
}

func makeDiscordWebhookRequest(contact *contactRequest) discordWebhookRequest {
	return discordWebhookRequest{
		Embeds: []discordEmbed{
			{
				Title:       "New housing request",
				Description: contact.Message,
				Timestamp:   time.Now().Format(time.RFC3339),
				Color:       1091757,
				Fields:      makeDiscordEmbedFields(contact),
			},
		},
	}
}

func sendDiscordEmbed(contact *contactRequest) error {
	json, _ := json.Marshal(makeDiscordWebhookRequest(contact))
	client := request.Client{
		URL:    os.Getenv("DISCORD_WEBHOOK_URL"),
		Method: "POST",
		JSON:   json,
	}
	response := client.Send()
	if err := response.Error(); err != nil {
		return err
	}
	return nil
}
