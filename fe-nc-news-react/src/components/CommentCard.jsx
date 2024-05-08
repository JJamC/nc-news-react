import { useState, useEffect } from "react";
import * as React from "react";
import { Box, ThemeProvider } from "@mui/material";
import { color } from "@mui/system";

export default function CommentCard({ comment }) {

    const originalDate = comment.created_at.split("T")
    const formattedDate = originalDate[0]

    return (
      <ThemeProvider
        theme={{
          palette: {
            primary: {
              main: "#007FFF",
              dark: "#0066CC",
            },
          },
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 300,
            borderRadius: 20,
            margin: 1,
            border: 1,
            borderColor: '808080',
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
        >
          <li className="comment-card">
            <p className="comment-card-author">{comment.author}</p>
            <p className="comment-card-info">{formattedDate}</p>
            <p className="comment-card-info">Votes: {comment.votes}</p>
            <p className="comment-card-info">{comment.body}</p>
          </li>
        </Box>
      </ThemeProvider>
    );
}