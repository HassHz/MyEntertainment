from django.shortcuts import render
from rest_framework import views
from rest_framework.response import Response

import json
import requests

# Create your views here.
class SearchView(views.APIView):
    def __init__(self, **kwargs):
        self.api_key = ''

    def _search_movie_tmdb(self, searchText):
        url = 'https://api.themoviedb.org/3/search/movie?api_key={}&query={}'.format(
            self.api_key, searchText.replace(" ", "+"))
        response = requests.post(url)
        return response.json()

    def post(self, request, *args, **kwargs):
        searchType = request.data.get('searchType', None)
        searchText = request.data.get('searchText', None)
        if searchType == 'all' and searchText:
            return Response({"successs": True, "search": searchType})
        elif searchType =='movie' and searchText:
            search_results = self._search_movie_tmdb(searchText)
            return Response({"search_results": search_results})
        