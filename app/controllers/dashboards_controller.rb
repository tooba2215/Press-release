class DashboardsController < ApplicationController

  def index

  end

  def get_logo
    @input_value = params[:url]

    require "uri"
    require "net/http"
    url = URI("https://logo.clearbit.com/#{@input_value}?size=200")
    https = Net::HTTP.new(url.host, url.port)
    https.use_ssl = true
    request = Net::HTTP::Get.new(url)
    response = https.request(request)
    @logo = response.read_body
    require 'base64'
    encoded_string = Base64.encode64(@logo) { |io| io.read }
    respond_to do |format|
      format.json {render :json => {image: encoded_string}}
    end
  end
end
