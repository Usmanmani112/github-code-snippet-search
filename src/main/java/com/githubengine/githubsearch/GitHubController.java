package com.githubengine.githubsearch;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import java.util.List;

@RestController
public class GitHubController {

    private static final String GITHUB_API_URL = "https://api.github.com/search/repositories?q=";

    @GetMapping("/search")
    public List<GitHubRepo> searchGitHubRepos(@RequestParam String query) {
        String url = GITHUB_API_URL + query;
        RestTemplate restTemplate = new RestTemplate();
        GitHubResponse response = restTemplate.getForObject(url, GitHubResponse.class);
        return response.getItems();
    }
}
