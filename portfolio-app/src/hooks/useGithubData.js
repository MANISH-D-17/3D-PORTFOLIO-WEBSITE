import { useState, useEffect } from 'react';

const useGithubData = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      const cacheKey = `github_repos_${username}`;
      const cached = localStorage.getItem(cacheKey);
      
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < 3600000) { // 1 hour cache
          setRepos(data);
          setLoading(false);
          return;
        }
      }

      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`);
        if (!response.ok) throw new Error('Failed to fetch GitHub data');
        const data = await response.json();
        
        const extracted = data.map(repo => ({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          stargazers_count: repo.stargazers_count,
          stars: repo.stargazers_count,
          language: repo.language,
          html_url: repo.html_url,
          url: repo.html_url,
          updated_at: repo.updated_at,
          topics: repo.topics || []
        }));

        localStorage.setItem(cacheKey, JSON.stringify({ data: extracted, timestamp: Date.now() }));
        setRepos(extracted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};

export default useGithubData;
