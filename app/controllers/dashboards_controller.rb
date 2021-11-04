class DashboardsController < ApplicationController
  def index
    require "uri"
    require "net/http"

    url = URI("https://logo.clearbit.com/google.com?size=200&format=png&greyscale=true")

    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true

    request = Net::HTTP::Get.new(url)

    response = https.request(request)
    puts response.read_body
  end
end
