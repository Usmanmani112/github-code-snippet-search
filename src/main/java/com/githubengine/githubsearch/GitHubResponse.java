package com.githubengine.githubsearch;

import java.util.List;

public class GitHubResponse {
    private List<GitHubRepo> items;

    public List<GitHubRepo> getItems() {
        return items;
    }

    public void setItems(List<GitHubRepo> items) {
        this.items = items;
    }
}
