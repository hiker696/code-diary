<template>
  <div class="chat-container">
    <h2>AI 问答小助手 🤖</h2>

    <div class="messages">
      <div v-for="(msg, index) in messages" :key="index" class="message">
        <strong>{{ msg.role === 'user' ? '你' : 'AI' }}:</strong> {{ msg.content }}
      </div>
    </div>

    <div class="input-area">
      <input v-model="userInput" @keyup.enter="sendMessage" placeholder="输入你的问题..." />
      <button @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userInput = ref('')
const messages = ref([])

const sendMessage = async () => {
  if (!userInput.value.trim()) return

  // 添加用户消息
  messages.value.push({ role: 'user', content: userInput.value })

  const chatHistory = [...messages.value]

  userInput.value = ''

  // 调用 OpenAI API
  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer 你的API密钥', // ←←← 填上你的 key
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: chatHistory
      })
    })

    const data = await res.json()
    const aiReply = data.choices[0].message.content

    messages.value.push({ role: 'assistant', content: aiReply })
  } catch (err) {
    messages.value.push({ role: 'assistant', content: '出错了，请稍后再试。' })
    console.error(err)
  }
}
</script>

<style scoped>
.chat-container {
  max-width: 600px;
  margin: 50px auto;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 12px;
}
.messages {
  max-height: 300px;
  overflow-y: auto;
  margin-bottom: 10px;
}
.message {
  margin: 8px 0;
}
.input-area {
  display: flex;
  gap: 10px;
}
input {
  flex: 1;
  padding: 8px;
}
button {
  padding: 8px 16px;
}
</style>
