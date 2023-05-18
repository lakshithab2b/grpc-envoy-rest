protoc --proto_path=apps/grpc-svc/proto \
  --include_imports --include_source_info \
  --descriptor_set_out=proto/user.pb apps/grpc-svc/proto/user.proto

envoy -c envoy.yml