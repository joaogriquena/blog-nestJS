import axios from "axios";

export const api = axios.create({
    baseURL: 'https://zanpeakdfavofcasnvbs.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphbnBlYWtkZmF2b2ZjYXNudmJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwNzg4NDUsImV4cCI6MTk5NDY1NDg0NX0.P7qEL6QQgCPjU993UeqEnj2gm18hwKZcbxmJog6pklI",
    }
})