class HomeController < ApplicationController
  def index
    if params[:locale].present?
      flash.now[:locale] = params[:locale]
    else
      flash.now[:locale] = 'en'
    end
  end
end
