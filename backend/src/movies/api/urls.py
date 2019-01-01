from django.urls import path
# from .views import MovieListView, MovieDetailView, MovieCreateView, MovieUpdateView, MovieDestroyView
from rest_framework.routers import DefaultRouter
from .views import MovieViewSet

# urlpatterns = [
#     path('', MovieListView.as_view()),
#     path('<pk>', MovieDetailView.as_view()),
#     path('create/', MovieCreateView.as_view()),
#     path('<pk>/update', MovieUpdateView.as_view()),
#     path('<pk>/delete', MovieDestroyView.as_view()),
# ]

router = DefaultRouter()
router.register(r'api', MovieViewSet, base_name='movie')
urlpatterns = router.urls