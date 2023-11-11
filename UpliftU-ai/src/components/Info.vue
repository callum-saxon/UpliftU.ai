<template>
  <v-container class="fade-in">
    <v-row>
      <v-col cols="12" md="6">
        <div class="header-column">
          <h1 class="headline">PURPOSE OF UPLIFTU</h1>
          <h2 class="subtitle-1 purpose-text">
            Enhancing mental well-being with empathetic AI support.
          </h2>
          <h2 class="body-1">
            Many people are building 'Jarvis' like applications, each trying to
            make the world and their work more efficient, but we for one don't
            want to live in a world where AI is focused so much on making you so
            efficient, and yet it doesn't understand how you feel or what
            motivates you. This is what we're focused on with UpliftU.ai
          </h2>
        </div>
        <v-btn
          variant="outlined"
          rounded="xl"
          size="large"
          style="margin-bottom: 20px; font-weight: 300"
          href="https://www.nhs.uk/nhs-services/mental-health-services/"
          class="professional-btn"
        >
          <p style="margin-right: 0.5rem">SEE A PROFESSIONAL</p>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-img
          src="@/assets/chat_bot.svg"
          alt="Chat Bot Image"
          class="responsive-image"
        />
      </v-col>

      <v-col v-for="(card, index) in cards" :key="index" cols="12" md="4">
        <div class="card">
          <div class="card-details">
            <p class="text-body">
              <span class="card-number">0{{ index + 1 }}.</span>
              {{ card.details }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col> </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const cards = [
  {
    details:
      "We believe everyone deserves free access to meaningful conversations. That's why we offer a service where you can talk to someone without a cost.",
  },
  {
    details:
      "Explore UpliftU.ai, your empathetic AI companion designed to enrich your mental wellness journey and nurture a profound connection with yourself.",
  },
  {
    details:
      "Experience personalised mental health support with UpliftU.ai, gaining insights into your emotions and motivations for a comprehensive well-being journey.",
  },
];
</script>

<style>
.responsive-image {
  pointer-events: none;
  height: auto;
}

.header-column {
  padding-right: 2rem;
}

.headline {
  font-size: 1.2rem;
  padding-bottom: 2rem;
}

.purpose-text {
  font-size: 2.5rem;
  font-weight: 500;
  padding-bottom: 100px;
}

.body-1 {
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 4rem;
}

.card {
  width: 100%;
  height: 100%;
  padding: 1.8rem;
  background: rgba(201, 201, 201, 0.25);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.1px);
  -webkit-backdrop-filter: blur(3.1px);
  border: 1px solid rgba(201, 201, 201, 0.3);
}
.card-details {
  height: 100%;
  gap: 0.5em;
  display: grid;
  place-content: center;
}

.card:hover {
  background-color: #7164fc52;
  transition: 1s ease;
  border: 1px solid #7164fc52;
}

.text-body {
  font-size: 1.5rem;
  display: flex;
}

.card-number {
  font-size: 1.5rem;
  font-weight: bold;
}

@media only screen and (max-width: 600px) {
  .headline {
    font-size: 1.5rem;
  }

  .purpose-text {
    font-size: 1.2rem;
  }

  .body-1 {
    font-size: 1rem;
  }

  .text-body {
    font-size: 1rem;
  }

  .card-number {
    font-size: 1.5rem;
  }
}
</style>
