class AlertSerializer < ActiveModel::Serializer
  attributes :id, :is_read
  has_one :user
end
