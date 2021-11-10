Rails.application.routes.draw do
  get 'dashboards/index'
  root to: 'dashboards#index'
  get 'dashboards/get_logo'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
